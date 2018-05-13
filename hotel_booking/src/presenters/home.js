import React from 'react';
import FaChild from 'react-icons/lib/fa/child';
import FaGroup from 'react-icons/lib/fa/group';
import FaBed from 'react-icons/lib/fa/bed';
import FaUser from 'react-icons/lib/fa/user';


const Home = ({ onClick, roomCount, adultCount, childrenCount }) => (
  <div >
    <div className="row justify-content-md-center">
      <FaGroup /> &nbsp; Choose number of people
    </div>

    <hr style={{ height: "10px" }} />

    <div className="row justify-content-md-center">
      <FaBed />&nbsp; ROOMS
      <div className="col-md-3 offset-md-4">
        <button
          className="fa fa-minus-circle fa-lg "
          style={{
            background: "transparent",
            border: "transparent",
            outline: "none",
            color: roomCount === 1 ? "#C0C0C0" : "#191970"
          }}
          onClick={() => { onClick('ROOM', '-') }}
          disabled={roomCount === 1 ? true : false} />
        &nbsp;
      {roomCount}
        &nbsp;
      <button
          className="fa fa-plus-circle fa-lg "
          style={{
            background: "transparent",
            border: "transparent",
            outline: "none",
            color: roomCount === 5 ? "#C0C0C0" : "#ff0055"
          }}
          onClick={() => { onClick('ROOM', '+') }}
          disabled={roomCount === 5 ? true : false}
        />
      </div>
    </div>
    <hr style={{ height: "10px" }} />

    <div className="row justify-content-md-center">
      <FaUser />&nbsp; ADULTS
      <div className="col-md-3 offset-md-4">
        <button
          className="fa fa-minus-circle fa-lg "
          style={{
            background: "transparent",
            border: "transparent",
            outline: "none",
            color: adultCount === 0 ? "#C0C0C0" : "#191970"
          }}
          onClick={() => { onClick('ADULT', '-') }}
          disabled={adultCount === 0 ? true : false} />
        &nbsp;
      {adultCount}
        &nbsp;
      <button
          className="fa fa-plus-circle fa-lg "
          style={{
            background: "transparent",
            border: "transparent",
            outline: "none",
            color: '#ff1a66'
          }}
          onClick={() => { onClick('ADULT', '+') }} />
      </div>
    </div>
    <hr style={{ height: "10px" }} />

    <div className="row justify-content-md-center">
      <FaChild /> &nbsp;CHILDREN
      <div className="col-md-3 offset-md-4">
        <button
          className="fa fa-minus-circle fa-lg "
          style={{
            background: "transparent",
            border: "transparent",
            outline: "none",
            color: childrenCount === 0 ? "#C0C0C0" : "#191970"
          }}
          onClick={() => { onClick('CHILDREN', '-') }}
          disabled={childrenCount === 0 ? true : false}
        />
        &nbsp;
      {childrenCount}
        &nbsp;
      <button
          className="fa fa-plus-circle fa-lg "
          style={{
            background: "transparent",
            border: "transparent",
            outline: "none",
            color: '#ff1a66'
          }}
          onClick={() => { onClick('CHILDREN', '+') }} />
      </div>
    </div>
    <hr style={{ height: "10px" }} />
  </div>
);

export default Home;