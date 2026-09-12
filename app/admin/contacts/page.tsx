'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './contacts.module.css';

type Reply = {
  _id?: string;
  message?: string;
  admin?: string;
  emailStatus?: string;
  createdAt?: string;
};

type Contact = {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  subject?: string;
  type?: string;
  message?: string;
  status?: string;
  replies?: Reply[];
  createdAt?: string;
  updatedAt?: string;
};

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selected, setSelected] = useState<Contact | null>(null);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'pending' | 'replied'>(
    'all'
  );

  const [replyMessage, setReplyMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function loadContacts() {
    try {
      setLoading(true);
      setError('');

      const res = await fetch('/api/admin/contacts', {
        cache: 'no-store',
      });

      const contentType = res.headers.get('content-type') || '';

      if (!contentType.includes('application/json')) {
        const text = await res.text();

        throw new Error(
          `Server returned an invalid response (${res.status}). ${text.slice(
            0,
            120
          )}`
        );
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Unable to load contacts.');
      }

      const items: Contact[] = Array.isArray(data)
        ? data
        : Array.isArray(data?.items)
          ? data.items
          : [];

      setContacts(items);

      setSelected((current) => {
        if (!current?._id) {
          return items[0] || null;
        }

        return (
          items.find((item) => item._id === current._id) ||
          items[0] ||
          null
        );
      });
    } catch (err: any) {
      console.error(err);
      setError(
        err?.message || 'Unable to load contact requests.'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadContacts();
  }, []);

  const stats = useMemo(() => {
    const total = contacts.length;

    const replied = contacts.filter(
      (item) =>
        item.status === 'replied' ||
        Boolean(item.replies?.length)
    ).length;

    const pending = total - replied;

    return {
      total,
      pending,
      replied,
    };
  }, [contacts]);

  const filteredContacts = useMemo(() => {
    const q = search.trim().toLowerCase();

    return contacts.filter((item) => {
      const isReplied =
        item.status === 'replied' ||
        Boolean(item.replies?.length);

      if (filter === 'replied' && !isReplied) {
        return false;
      }

      if (filter === 'pending' && isReplied) {
        return false;
      }

      if (!q) {
        return true;
      }

      return [
        item.name,
        item.email,
        item.phone,
        item.subject,
        item.type,
        item.message,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [contacts, search, filter]);

  function selectContact(contact: Contact) {
    setSelected(contact);
    setReplyMessage('');
    setError('');
    setSuccess('');
  }

  async function sendReply() {
    if (!selected?._id) {
      setError('Please select a contact request.');
      return;
    }

    const message = replyMessage.trim();

    if (!message) {
      setError('Please write a reply first.');
      return;
    }

    try {
      setSending(true);
      setError('');
      setSuccess('');

      const res = await fetch(
        `/api/admin/contacts/${selected._id}/reply`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message,
          }),
        }
      );

      const contentType =
        res.headers.get('content-type') || '';

      if (!contentType.includes('application/json')) {
        const text = await res.text();

        throw new Error(
          `Reply API returned invalid response (${res.status}). ${text.slice(
            0,
            180
          )}`
        );
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.error || 'Unable to send reply.'
        );
      }

      setReplyMessage('');

      if (data.emailStatus === 'sent') {
        setSuccess(
          'Reply sent successfully to the contact email.'
        );
      } else {
        setSuccess(
          'Reply saved successfully. Email is not configured yet.'
        );
      }

      await loadContacts();
    } catch (err: any) {
      console.error(err);

      setError(
        err?.message ||
          'Unable to send reply.'
      );
    } finally {
      setSending(false);
    }
  }

  function formatDate(value?: string) {
    if (!value) return '—';

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return '—';
    }

    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  function formatDateTime(value?: string) {
    if (!value) return '—';

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return '—';
    }

    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  function getInitials(name?: string) {
    if (!name) return '?';

    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }

  const selectedIsReplied =
    selected?.status === 'replied' ||
    Boolean(selected?.replies?.length);

  return (
    <main className={styles.contactsAdmin}>
      <header className={styles.contactsHeader}>
        <div className={styles.contactsShell}>
          <div className={styles.contactsHeaderInner}>
            <div>
              <span className={styles.contactsBrand}>
                PRERNA FOUNDATION
              </span>

              <strong>
                COMMUNICATION CENTER
              </strong>
            </div>

            <Link
              href="/admin"
              className={styles.contactsBack}
            >
              ← Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contactsShell}>
        <section className={styles.contactsHero}>
          <div>
            <span className={styles.contactsEyebrow}>
              COMMUNICATION
            </span>

            <h1>
              Contact{' '}
              <em>requests.</em>
            </h1>

            <p>
              Manage enquiries, follow-ups and
              conversations with people who reach
              Prerna Foundation.
            </p>
          </div>

          <div className={styles.contactsHeroMark}>
            <span>INBOX</span>
            <strong>
              {String(stats.total).padStart(2, '0')}
            </strong>
          </div>
        </section>

        {error && (
          <div className={styles.contactsError}>
            {error}
          </div>
        )}

        {success && (
          <div className={styles.contactsSuccess}>
            {success}
          </div>
        )}

        <section className={styles.contactsKpis}>
          <article>
            <span>Total requests</span>

            <strong>{stats.total}</strong>

            <small>
              All enquiries received
            </small>
          </article>

          <article>
            <span>Pending</span>

            <strong>{stats.pending}</strong>

            <small>
              Need attention
            </small>
          </article>

          <article>
            <span>Replied</span>

            <strong>{stats.replied}</strong>

            <small>
              Already followed up
            </small>
          </article>
        </section>

        <section className={styles.contactsToolbar}>
          <div className={styles.contactsSearch}>
            <span>⌕</span>

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search name, email, phone..."
            />
          </div>

          <div className={styles.contactsFilters}>
            <button
              className={
                filter === 'all'
                  ? styles.active
                  : ''
              }
              onClick={() => setFilter('all')}
            >
              All
            </button>

            <button
              className={
                filter === 'pending'
                  ? styles.active
                  : ''
              }
              onClick={() => setFilter('pending')}
            >
              Pending
            </button>

            <button
              className={
                filter === 'replied'
                  ? styles.active
                  : ''
              }
              onClick={() => setFilter('replied')}
            >
              Replied
            </button>

            <button
              className={styles.refreshButton}
              onClick={loadContacts}
              disabled={loading}
            >
              ↻ Refresh
            </button>
          </div>
        </section>

        <section className={styles.contactsWorkspace}>
          <div className={styles.contactsList}>
            <div className={styles.contactsListHead}>
              <span>INBOX</span>

              <strong>
                {filteredContacts.length}{' '}
                requests
              </strong>
            </div>

            {loading ? (
              <div className={styles.contactsEmpty}>
                <div>
                  <div
                    className={
                      styles.contactsSpinner
                    }
                  />

                  Loading requests...
                </div>
              </div>
            ) : filteredContacts.length === 0 ? (
              <div className={styles.contactsEmpty}>
                <div>
                  <strong>
                    No contact requests found.
                  </strong>

                  <br />

                  Try another search or filter.
                </div>
              </div>
            ) : (
              filteredContacts.map((contact) => {
                const replied =
                  contact.status === 'replied' ||
                  Boolean(contact.replies?.length);

                const isSelected =
                  selected?._id === contact._id;

                return (
                  <button
                    key={contact._id}
                    className={`${styles.requestRow} ${
                      isSelected
                        ? styles.selected
                        : ''
                    }`}
                    onClick={() =>
                      selectContact(contact)
                    }
                  >
                    <span
                      className={
                        styles.requestAvatar
                      }
                    >
                      {getInitials(contact.name)}
                    </span>

                    <span
                      className={
                        styles.requestMain
                      }
                    >
                      <strong>
                        {contact.name ||
                          'Unknown person'}
                      </strong>

                      <small>
                        {contact.email ||
                          'No email'}
                      </small>

                      <b>
                        {contact.subject ||
                          contact.type ||
                          'General enquiry'}
                      </b>
                    </span>

                    <span
                      className={
                        styles.requestMeta
                      }
                    >
                      <i
                        className={`${styles.statusDot} ${
                          replied
                            ? styles.replied
                            : styles.pending
                        }`}
                      />

                      <time>
                        {formatDate(
                          contact.createdAt
                        )}
                      </time>
                    </span>
                  </button>
                );
              })
            )}
          </div>

          <div
            className={`${styles.requestDetail} ${
              !selected
                ? styles.detailEmpty
                : ''
            }`}
          >
            {!selected ? (
              <div
                className={
                  styles.contactsEmpty
                }
              >
                Select a request to view details.
              </div>
            ) : (
              <>
                <div className={styles.detailTop}>
                  <div>
                    <span
                      className={
                        styles.contactsEyebrow
                      }
                    >
                      CONTACT REQUEST
                    </span>

                    <h2>
                      {selected.name ||
                        'Unknown'}
                    </h2>

                    <p>
                      Received{' '}
                      {formatDateTime(
                        selected.createdAt
                      )}
                    </p>
                  </div>

                  <span
                    className={`${styles.statusBadge} ${
                      selectedIsReplied
                        ? styles.replied
                        : styles.pending
                    }`}
                  >
                    {selectedIsReplied
                      ? 'Replied'
                      : 'Pending'}
                  </span>
                </div>

                <div
                  className={
                    styles.detailIdentity
                  }
                >
                  <a
                    href={
                      selected.email
                        ? `mailto:${selected.email}`
                        : '#'
                    }
                  >
                    <span>Email</span>

                    <strong>
                      {selected.email ||
                        'Not provided'}
                    </strong>
                  </a>

                  <a
                    href={
                      selected.phone
                        ? `tel:${selected.phone}`
                        : '#'
                    }
                  >
                    <span>Phone</span>

                    <strong>
                      {selected.phone ||
                        'Not provided'}
                    </strong>
                  </a>

                  <div>
                    <span>Type</span>

                    <strong>
                      {selected.type ||
                        'General'}
                    </strong>
                  </div>
                </div>

                <div
                  className={
                    styles.detailSubject
                  }
                >
                  <span>Subject</span>

                  <h3>
                    {selected.subject ||
                      'No subject'}
                  </h3>
                </div>

                <div
                  className={styles.messageBox}
                >
                  <span>
                    MESSAGE
                  </span>

                  <p>
                    {selected.message ||
                      'No message provided.'}
                  </p>
                </div>

                {selected.address && (
                  <div
                    className={
                      styles.addressBox
                    }
                  >
                    <span>ADDRESS</span>

                    <p>
                      {selected.address}
                    </p>
                  </div>
                )}

                {selected.replies &&
                  selected.replies.length >
                    0 && (
                    <div
                      className={
                        styles.repliesHistory
                      }
                    >
                      <div
                        className={
                          styles.historyTitle
                        }
                      >
                        <span>
                          FOLLOW-UP HISTORY
                        </span>

                        <strong>
                          {selected.replies.length}{' '}
                          replies
                        </strong>
                      </div>

                      {selected.replies
                        .slice()
                        .reverse()
                        .map(
                          (
                            reply,
                            index
                          ) => (
                            <div
                              key={
                                reply._id ||
                                index
                              }
                              className={
                                styles.replyItem
                              }
                            >
                              <div>
                                <strong>
                                  Admin reply
                                </strong>

                                <small>
                                  {formatDateTime(
                                    reply.createdAt
                                  )}
                                </small>
                              </div>

                              <p>
                                {reply.message ||
                                  '(Empty reply)'}
                              </p>

                              <span>
                                Email:{' '}
                                {reply.emailStatus ||
                                  'unknown'}
                              </span>
                            </div>
                          )
                        )}
                    </div>
                  )}

                <div
                  className={
                    styles.replyPanel
                  }
                >
                  <div>
                    <span>
                      FOLLOW UP
                    </span>

                    <strong>
                      Reply to{' '}
                      {selected.name}
                    </strong>

                    <p>
                      {selected.email ||
                        'No email address available'}
                    </p>
                  </div>

                  <div
                    className={
                      styles.replyForm
                    }
                  >
                    <textarea
                      value={replyMessage}
                      onChange={(e) =>
                        setReplyMessage(
                          e.target.value
                        )
                      }
                      placeholder="Write your reply here..."
                      disabled={sending}
                    />

                    <button
                      onClick={sendReply}
                      disabled={
                        sending ||
                        !selected.email ||
                        !replyMessage.trim()
                      }
                    >
                      {sending
                        ? 'Sending...'
                        : 'Send Reply'}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
