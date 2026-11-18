import {useState, type CSSProperties} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral/built';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {HStack} from '@astryxdesign/core/HStack';
import {Icon} from '@astryxdesign/core/Icon';
import {Text} from '@astryxdesign/core/Text';
import {Token} from '@astryxdesign/core/Token';
import {VStack} from '@astryxdesign/core/VStack';
import {certifications, education, experience, languages, profile, projects, skills} from './data/cv';

// Cerro de la Silla: the saddle-shaped mountain on Monterrey's skyline.
const CERRO_PATH =
  'M0 150 L70 138 L120 120 L170 112 L215 84 L250 70 L268 46 L282 40 L300 62 L330 88 L360 92 ' +
  'L385 70 L405 34 L420 18 L432 22 L452 56 L480 82 L520 104 L560 120 L600 132 L680 140 L800 150';

// Stagger index for the hero load sequence (see .reveal in index.css).
const step = (i: number) => ({'--i': i}) as CSSProperties;

function Bullets({items}: {items: readonly string[]}) {
  return (
    <ul className="bullets">
      {items.map(item => (
        <li key={item}>
          <Text color="secondary" textWrap="pretty">
            {item}
          </Text>
        </li>
      ))}
    </ul>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      label={copied ? 'Correo copiado' : 'Copiar correo'}
      icon={<Icon icon={copied ? 'check' : 'copy'} />}
      clickAction={async () => {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    />
  );
}

export default function App() {
  return (
    <Theme theme={neutralTheme} mode="light">
      <div className="page">
        <header className="topbar">
          <a className="wordmark" href="#top">
            Cruz Pérez
          </a>
          <nav className="nav-links" aria-label="Secciones">
            <a href="#experiencia">Experiencia</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        <main id="top">
          <section className="hero">
            <div className="hero-inner">
              <div className="hero-badges">
                <span className="reveal" style={step(0)}>
                  <Avatar name="Cruz Pérez" size={48} tooltip={false} />
                </span>
                <span className="reveal" style={step(1)}>
                  <Badge variant="green" label="Abierto a oportunidades" />
                </span>
              </div>

              <h1 className="hero-name reveal" style={step(2)}>
                <span>Cruz Yael</span>
                <span>Pérez González</span>
              </h1>

              <p className="hero-lede reveal" style={step(3)}>
                Ingeniero full-stack y móvil. Construyo apps web y de iOS de principio a fin con React, Next.js,
                Swift y AWS, y estudio Ingeniería en Tecnologías Computacionales en el Tec de Monterrey.
              </p>

              <div className="reveal" style={step(4)}>
                <HStack gap={2} wrap="wrap">
                  <Button variant="primary" label="Enviar correo" href={`mailto:${profile.email}`} />
                  <Button label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer" endContent={<Icon icon="externalLink" />} />
                  <Button label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" endContent={<Icon icon="externalLink" />} />
                </HStack>
              </div>
            </div>

            <figure className="skyline" aria-hidden="true">
              <span className="sun-glow" />
              <span className="sun" />
              <svg viewBox="0 0 800 160" preserveAspectRatio="none">
                <path className="skyline-fill" d={`${CERRO_PATH} L800 160 L0 160 Z`} />
                <path className="skyline-line" d={CERRO_PATH} pathLength={1} />
              </svg>
            </figure>
            <p className="skyline-caption reveal" style={step(6)}>
              {profile.location}. {profile.relocation}.
            </p>
          </section>

          <section className="section" id="experiencia">
            <Heading level={2}>Experiencia</Heading>
            <ol className="timeline">
              {experience.map(job => (
                <li key={job.company} className="timeline-item">
                  <span className={job.isCurrent ? 'dot dot-current' : 'dot'} aria-hidden="true" />
                  <div className="job-head">
                    <VStack gap={0.5}>
                      <HStack gap={2} vAlign="center" wrap="wrap">
                        <Heading level={3}>{job.company}</Heading>
                        {job.isCurrent && <Badge variant="blue" label="Actual" />}
                      </HStack>
                      <Text color="secondary">{job.role}</Text>
                    </VStack>
                    <div className="job-meta">
                      <Text type="supporting" hasTabularNumbers>
                        {job.period}
                      </Text>
                      <Text type="supporting">{job.location}</Text>
                    </div>
                  </div>
                  <Bullets items={job.bullets} />
                </li>
              ))}
            </ol>
          </section>

          <section className="section" id="proyectos">
            <Heading level={2}>Proyectos</Heading>
            <div className="projects">
              {projects.map(project => (
                <article key={project.name} className="project">
                  <div>
                    <Text type="supporting">
                      {project.kind}, {project.date}
                    </Text>
                    <h3 className="project-name">{project.name}</h3>
                  </div>
                  <HStack gap={1} wrap="wrap">
                    {project.stack.map(tech => (
                      <Token key={tech} size="sm" color="blue" label={tech} />
                    ))}
                  </HStack>
                  <Bullets items={project.bullets} />
                  {project.links.length > 0 && (
                    <HStack gap={2} wrap="wrap">
                      {project.links.map(link => (
                        <Button
                          key={link.href}
                          size="sm"
                          label={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          endContent={<Icon icon="externalLink" />}
                        />
                      ))}
                    </HStack>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="habilidades">
            <Heading level={2}>Habilidades</Heading>
            <dl className="skills">
              {skills.map(group => (
                <div key={group.label} className="skills-row">
                  <dt>
                    <Text type="label">{group.label}</Text>
                  </dt>
                  <dd>
                    {group.items.map(item => (
                      <Token key={item} size="sm" label={item} />
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="section">
            <Heading level={2}>Formación</Heading>
            <div className="facts">
              <div className="fact">
                <Heading level={3}>{education.school}</Heading>
                <Text color="secondary">{education.degree}</Text>
                <Text type="supporting">{education.period}</Text>
                <p className="gpa">
                  <span className="gpa-value">{education.gpa.split('/')[0]}</span>
                  <Text type="supporting">promedio de 100</Text>
                </p>
              </div>
              <div className="fact">
                <Heading level={3}>Certificaciones</Heading>
                {certifications.map(cert => (
                  <HStack key={cert} gap={2} vAlign="center">
                    <Icon icon="success" color="success" size="sm" />
                    <Text>{cert}</Text>
                  </HStack>
                ))}
              </div>
              <div className="fact">
                <Heading level={3}>Idiomas</Heading>
                {languages.map(lang => (
                  <Text key={lang}>{lang}</Text>
                ))}
              </div>
            </div>
          </section>

          <section className="contact" id="contacto">
            <h2 className="contact-title">¿Hablamos?</h2>
            <Text type="large" color="secondary" justify="center">
              Busco prácticas y posiciones full-stack o móviles.
            </Text>
            <HStack gap={2} wrap="wrap" hAlign="center">
              <Button variant="primary" size="lg" label={profile.email} href={`mailto:${profile.email}`} />
              <CopyEmailButton />
            </HStack>
          </section>
        </main>

        <footer className="footer">
          <Text type="supporting">
            © {new Date().getFullYear()} {profile.name}. Hecho con React y Astryx.
          </Text>
        </footer>
      </div>
    </Theme>
  );
}
