import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendListItem}>
      <img className={css.avatarItem} src={avatar} alt="Avatar" width="82" />
      <p className={css.nameItem}>{name}</p>
      <p className={isOnline ? css.statusItemOnline : css.statusItemOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
