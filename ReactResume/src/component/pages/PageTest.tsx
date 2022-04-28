import { useState } from 'react'
import { styled } from '@stitches/react';
import {PageBack, PageContents, PageSection, LeftSpace, FlagTitle, LeftZoneImg, NavLogoImg, LeftWrapper, ContentNav, ContentNavZoneHome, ContentNavZoneSpec, ContentNavZoneGit, ContentHeadLine, ContentLine, ContentList, ContentLink} from '../../style/basicComponentsStyle';

// interface PageTestProps{
//   status?: string;
// }

// const defaultProps: PageTestProps = {
//   status: "현재 공사중"
// }

const BasicFullWindow = styled('div', {
  margin: 0,
  padding: 0,

  backgroundColor: '#00D6C0'
});

// const Counter = () => {
//   const [num, setNum] = useState(0);

//   const onIncrease = () => {
//     setNum(prevNum => prevNum + 1);
//   }

//   const onDecrease = () => {
//     setNum(prevNum => prevNum - 1);
//   }

//   return {
//     <div> Hello </div>
//   }
// };

const PageTest = (props:any) => {

  const [Contents, setContents] = useState({
    name: "",
    footSize: ""
  });

  const {name, footSize} = Contents;

  const onClear = () => {
    setContents({
      name: "",
      footSize: ""
    });
  }

  const onChange = (e:any) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const {name, value} = e.target;

    const tmp = {
      ...Contents,
      [name]: value
    }
    setContents(tmp);
  }


  return (
    <PageBack className='back'>
      <LeftSpace>
          <LeftWrapper>
              <FlagTitle>
                {props.status}인 Test Page에요! <br/>조심하세요! * {props.num}
                {/* { props.isSmart ? Counter : null} */}
              </FlagTitle>
          </LeftWrapper>
      </LeftSpace>
      <PageSection>
        <ContentNav>
          <ContentNavZoneHome>
            <NavLogoImg src='../../src/images/villa.png' alt="construction GIF" />
          </ContentNavZoneHome>
          <ContentNavZoneSpec>
          <NavLogoImg src='../../src/images/docs.png' alt="construction GIF" />
          </ContentNavZoneSpec>
          <ContentNavZoneGit>
          <NavLogoImg src='../../src/images/githubCat.svg' alt="construction GIF" />
          </ContentNavZoneGit>
        </ContentNav>
        <PageContents>
          <ContentHeadLine>
            안녕하세요! 🕺 
            {props.isSmart ? "개잘생긴 " : "정말 바보같은 "}
            Hyunja 입니다.
          </ContentHeadLine>
          <ContentList>
            <input name="name" onChange={onChange} value={name} placeholder="이름"/>
            <input name="footSize" onChange={onChange} value={footSize} placeholder="발사이즈"/>
            <button onClick={onClear}>빠슝</button>
            <div>
              {name} ({footSize})
            </div>
          </ContentList>
        </PageContents>
      </PageSection>
    </PageBack>
  )
}

// PageTest.defaultProps = defaultProps;

PageTest.defaultProps = {
  status: "현재 공사중",
  num: 10
}

export default PageTest;
