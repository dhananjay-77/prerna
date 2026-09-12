'use client';

import { FormEvent, useState } from 'react';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function go(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))) });
      if (response.ok) { window.location.assign('/admin'); return; }
      setError('Invalid email or password.');
    } catch { setError('Unable to sign in right now. Please try again.'); }
    finally { setLoading(false); }
  }

  return <main className="admin loginPage"><section className="loginPanel" aria-labelledby="login-title"><div className="loginBrand" aria-hidden="true">PF</div><span className="eyebrow">Prerna Foundation</span><h1 id="login-title">Admin workspace</h1><p className="loginIntro">Sign in to manage the foundation’s website content and communications.</p><form className="loginForm" onSubmit={go}><label>Email address<input name="email" type="email" autoComplete="email" required /></label><label>Password<input name="password" type="password" autoComplete="current-password" required /></label><button className="btn loginSubmit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in securely'}</button>{error && <p className="loginError" role="alert">{error}</p>}</form><p className="loginFoot">Authorized Prerna Foundation team members only.</p></section></main>;
}
