import  {
  Comment_Wrapper,
  Comment_Header,
  Comment_Title,
  Comment_Count,
  Comment_Body,
  Profile_Picture,
  Profile_Input,
  Profile_Input_Button,
  Comment_Footer,
}from '../../styledComponent';

import PersonalComment from './PersonalComment';

export default function Comment() {

  return(
    <>
      <Comment_Wrapper>
        <Comment_Header>
          <Comment_Title>댓글</Comment_Title>
          <Comment_Count>3개</Comment_Count>
        </Comment_Header>
        <Comment_Body>
          <Profile_Picture></Profile_Picture>
          <Profile_Input type="text" placeholder="댓글 추가..."/>
          <Profile_Input_Button>댓글</Profile_Input_Button>
        </Comment_Body>
        <Comment_Footer>
          <PersonalComment></PersonalComment>

        </Comment_Footer>
      </Comment_Wrapper>
    </>
  )
  
}