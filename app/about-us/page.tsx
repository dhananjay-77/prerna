import { Header, Footer } from '@/components/SiteChrome';

export default function About() {
  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="shell">
            <span className="eyebrow">Prerna Foundation</span>
            <h1>About us</h1>
          </div>
        </section>

        <article className="shell section prose">
          <p>
            Prerna Foundation is a non profit organisation (NGO) committed to
            creating suitable change and making meaningful difference in the
            lives of those who we serve. We are dedicated to make a lasting
            impact on society by facilitating opportunities in Education,
            Agriculture, Cooperative sector, Rural Development and
            Entrepreneurship. Founded on principles of empowerment and
            sustainability, in 2014, we aim to create every individual has a
            chance to thrive and contribute meaningfully to their community.
          </p>

          <p>
            Our approach is multifaceted, focusing on timely support, fostering
            aspirations and promoting harmony, all while encouraging individuals
            to contribute actively to their own development.
          </p>

          <h2>Vision</h2>
          <p>
            We envisage the holistic and sustainable growth of society through
            timely support, aspiration and social harmony with their own
            contribution.
          </p>

          <h2>Mission</h2>
          <p>
            To empower rural communities by providing avenues in education,
            agriculture, cooperative development and entrepreneurship. Our
            focus is on transforming youth into employers through comprehensive
            training and skill development, promoting natural farming and eco
            friendly practices, and fostering socio-economic growth in Gramin
            Bharat.
          </p>

          <h2>Future planning</h2>

          <ul>
            {/* <li>Science on Wheels – Mobile Planetarium</li> */}
            <li>Afforestation</li>
            <li>Soft Skill Development Program</li>
            <li>Computer Training (Coding and Programming)</li>
            <li>Deepening and widening of rivers and canals</li>
            <li>GDGS in 25 districts of Maharashtra</li>
            <li>
              Holistic Upliftment program for Katkari, Madiya and Kolam Tribes
            </li>
          </ul>

          {/* President Corner */}
          <section className="president-corner">
            <div className="president-corner-content">
              <div className="president-corner-image">
                <img
                  src="/images/president.jpg"
                  alt="President - Prerna Foundation"
                />
              </div>

              <div className="president-corner-text">
                <span className="eyebrow">President Corner</span>

                <h2>Message from the President</h2>

                <p>
                  At Prerna Foundation, we believe that sustainable development
                  begins with empowering people and strengthening communities.
                  Our constant endeavour is to create meaningful opportunities
                  in education, agriculture, rural development, skill
                  development and entrepreneurship.
                </p>

                <p>
                  With the support of our dedicated team, partners, volunteers
                  and community members, we are committed to building a
                  stronger, self-reliant and sustainable society.
                </p>

                <div className="president-signature">
                  <strong>President</strong>
                  <span>Prerna Foundation</span>
                </div>
              </div>
            </div>
          </section>

          <h2>Statutory information</h2>

          <table className="data-table">
            <tbody>
              {[
                ['Name of the NGO', 'PRERNA FOUNDATION'],
                ['Established', '2014 (Before Registration)'],
                [
                  'Registration',
                  'Indian Societies Registration Act XXI, of 1860',
                ],
                [
                  'Registration No.',
                  'F/16612 (Jalgaon), dated 06 June 2015',
                ],
                ['PAN', 'AADTP5789N'],
                ['Founder', 'Mr. Dhiraj Mahajan'],
                [
                  'Chief Functionary',
                  'Hrushikesh Nandedkar (Deshpande)',
                ],
                ['Contact', '8090127111'],
                ['Email', 'ceo.prerna@gmail.com'],
              ].map((r) => (
                <tr key={r[0]}>
                  <th>{r[0]}</th>
                  <td>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </main>

      <Footer />
    </>
  );
}