import { reducerCases } from "@/context/constants";
import { useStateProvider } from "@/context/StateContext";
import { GET_INITIAL_CONTACTS_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect } from "react";
import ChatLIstItem from "./ChatLIstItem";

function List() {
  const [{ currentChatUser, userInfo, userContacts, onlineUsers }, dispatch] =
    useStateProvider();

  console.log(userContacts);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const {
          data: { users, onlineUsers },
        } = await axios.get(`${GET_INITIAL_CONTACTS_ROUTE}/${userInfo?.id}`);
        dispatch({ type: reducerCases.SET_ONLINE_USERS, onlineUsers });
        dispatch({ type: reducerCases.SET_USER_CONTACTS, userContacts: users });
      } catch (error) {
        console.log(error);
      }
    };

    if (userInfo?.id) {
      getContacts();
    }
  }, [userInfo]);

  return (
    <div className="bg-search-input-container-background flex-auto overflow-auto max-h-full customer-scrollbar">
      {userContacts.map((contact) => (
        <ChatLIstItem data={contact} key={contact?.id} />
      ))}
    </div>
  );
}

export default List;
