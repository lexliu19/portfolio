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
          I&rsquo;m Lex, a passionate Software Developer with a Master&rsquo;s
          degree in Computer Software Engineering from Northeastern University.
        </p>
        <p>
          I specialize in building intuitive front-end interfaces and scalable
          back-end systems. I thrive in collaborative environments and am always
          eager to learn. Currently seeking opportunities as a Full-time
          software Engineer to bring innovative ideas to life. Let&rsquo;s build
          something amazing together! 🚀
        </p>
      </div>
    </section>
  );
};

export default Intro;
