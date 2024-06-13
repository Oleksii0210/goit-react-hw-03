import css from "./Profile.module.css";
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.card}>
      <div className={css.cardInfo}>
        <img className={css.cardImg} src={avatar} alt="User avatar" />
        <p className={css.nameText}>{username}</p>
        <p className={css.tagText}>@{tag}</p>
        <p className={css.tagText}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.stats}>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem + " " + css.views}>
          <span className={css.stats}>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.stats}>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
