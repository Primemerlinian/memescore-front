// stylesheets
import styles from "./Landing.module.css";

// types
import { User } from "../../types/models";

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props;

  return (
    <main className={styles.container}>
      <h1 style={{ color: "red" }}>Welcome to MemeScore!</h1>
      <h2 style={{ color: "white" }}>
        MemeScore lets you add and view funny memes! Log in or Sign Up and check it out!
      </h2>
      <img src="https://i.imgur.com/KZE7z34.png" />
    </main>
  );
};

export default Landing;
