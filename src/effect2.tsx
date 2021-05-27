import * as b from "bobril";
import * as api from "./api";
import { INotificationManager } from "./notificationManager";

export function Effect2(data: {
  notifications: INotificationManager;
}): b.IBobrilNode {
  const [userName, setUserName] = b.useState("");
  const [userId, setUserId] = b.useState<number | undefined>(undefined);

  b.useEffect(() => {
    if (!userId) return;

    data.notifications.register(userId);
    return () => {
      data.notifications.unregister();
    };
  }, [userId]);

  const changeUserId = async () => {
    const newUserId = await api.queryUserIdAsync(userName);
    setUserId(newUserId);
  };

  return (
    <div>
      <input type="text" onChange={setUserName} />
      <button onClick={() => b.swallowPromise(changeUserId())}>
        Zmenit usera
      </button>
    </div>
  );
}
