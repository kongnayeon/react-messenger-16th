import { useRecoilState, useRecoilValue } from "recoil";
import { myInfoSelector, userInformationState } from "../store/atom";
import styled from "styled-components";
import SingleUser from "./SingleUser";
import { UserInformation } from "../interfaces/interface";

const FriendList = () => {
  const userData = useRecoilState(userInformationState);
  const myInfo = useRecoilValue(myInfoSelector);

  return (
    <ItemWrapper>
      {userData[0].map((user: UserInformation, userId: number) =>
        userId === 0 ? (
          <>
            <h2>me</h2>
            <Line />
            <SingleUser key={user.userid} user={myInfo!} isFriendPage={true} />
            <h2>friends</h2>
            <Line />
          </>
        ) : (
          <SingleUser key={user.userid} user={user} isFriendPage={true} />
        )
      )}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.section`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
`;
const Line = styled.hr`
  border: none;
  border-top: 1px solid #8c8c8c;
  color: #000;
  width: 90%;
`;

export default FriendList;