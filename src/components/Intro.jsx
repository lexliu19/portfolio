import avatar from '../assets/avatar.svg';

const Intro = () => {
  return (
    <section id="intro">
      <div className="avatar-box">
        <img src={avatar} alt="Lex Liu" className="avatar" />
      </div>
      <div className="content">
        <p className="name">Software Developer</p>
        <h2>
          I write <span>Code.</span>
        </h2>
        <p>Hey there 👋!</p>
        <p>
          I&rsquo;m Lex—a software engineer who loves turning ideas into reality with code. Whether it&rsquo;s designing a sleek front-end or optimizing backend logic, I enjoy every step of the development process. I&rsquo;m passionate about building intuitive, scalable applications and exploring AI-driven solutions that enhance user experiences.
        </p>
        <p>
          When I’m not coding, you’ll probably find me tinkering with new tech 💻, or bouldering 🧗. I love challenges—both in software development and on the climbing wall. Let’s build something cool! 🚀
        </p>
      </div>
    </section>
  );
};

export default Intro;
