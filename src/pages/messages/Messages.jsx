import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase.config";

import "../../components/Spinner/Spinner";
import Spinner from "../../components/Spinner/Spinner";

const Messages = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Get reference
        const messagesRef = collection(db, "messages");

        // Create query
        const q = query(
          messagesRef,
          // where(),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        // Execute query
        const querySnap = await getDocs(q);

        const messages = [];
        querySnap.forEach((doc) => {
          return messages.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setMessages(messages);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch messages");
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : messages && messages.length > 0 ? (
        <>
          <ul>
            {messages.map((message) => (
              <li key={message.id}>{message.data.message}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>There are no current messages</p>
      )}
    </div>
  );
};
export default Messages;
