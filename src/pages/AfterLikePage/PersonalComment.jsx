import {Profile_Picture} from '../../styledComponent';
import styled from 'styled-components'

const PersonalComment_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  
`
const Profile_Text_Up  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`
const Profile_Text_Name = styled.div`

`
const Profile_Text_Time = styled.div`
  font-size: 12px;
  margin-left: 12px;
  color: gray;
`
const Profile_Text = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Profile_Comment = styled.div`
  display: block;
`
const Preference = styled.div`

`
export default function PersonalComment(){

  return(
    <>
      <PersonalComment_Wrapper>
        <Profile_Picture></Profile_Picture>
        <Profile_Text>
          <Profile_Text_Up>
            <Profile_Text_Name>@병장 2호봉</Profile_Text_Name>
            <Profile_Text_Time>4개월전</Profile_Text_Time>  
          </Profile_Text_Up>
          <Profile_Comment>
            이 노래를 통해 군생활을 극복했어요
          </Profile_Comment>
        </Profile_Text>
      </PersonalComment_Wrapper>
      <Preference></Preference>
    </>
  )
}