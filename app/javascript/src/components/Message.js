import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMessage } from '../redux/messagesSlice';
import HelloWorld from './HelloWorld';

const Message = () => {
  const dispatch = useDispatch();
  const randomMessage = useSelector((state) => state.messages.body);

  const generateMessageHandler = () => {
    dispatch(getRandomMessage());
  };

  useEffect(() => {
    dispatch(getRandomMessage());
  }, []);
  return (
    <div className="main_container">
      <HelloWorld />
      <h1>Random Message</h1>
      <p>{randomMessage}</p>
      <button onClick={generateMessageHandler}>Generate</button>
    </div>
  );
};

export default Message;
