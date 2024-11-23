import styles from "./styles.module.scss";

export interface Link {
  label: string;
  href: string;
}

export interface LinksProps {
  links: Link[];
  backgroundColor: string;
}

export const Links = ({ links }: LinksProps) => {
  return (
    <ul className={styles.links}>
      {links.map(({ label, href }) => (
        <li key={href}>{label}</li>
      ))}
    </ul>
  );
};

export default Links;
