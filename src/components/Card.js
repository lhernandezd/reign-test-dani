import styled from "styled-components";
import { Text } from "./shared/Typography";
import Icon from "./shared/Icon";
import UHeart from "../assets/unlike.png";

const CardWrapper = styled.div`
  width: 550px;
  height: 90px;
  margin: 38px 150px 30px 40px;
  padding: 0 0 0 26px;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

const CardBody = styled.div`
  max-width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  background-color: rgba(96, 96, 96, 0.06);
`;

function Card({ title = "", url, created }) {
  return (
    <CardWrapper>
      <CardBody>
        <Text color="#767676" size={11}>
          3 hours ago by author
        </Text>
        <Text lineHeight="20px" color="#6b6b6b" fontWeight="500">
          {title}
        </Text>
      </CardBody>
      <CardActions>
        <Icon src={UHeart} width={24} height={22} />
      </CardActions>
    </CardWrapper>
  );
}

export default Card;
