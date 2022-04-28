import { useState } from 'react'
import { styled } from '@stitches/react';
import {PageBack, PageContents, PageSection, LeftSpace, FlagTitle, LeftZoneImg, NavLogoImg, LeftWrapper, ContentNav, ContentNavZoneHome, ContentNavZoneSpec, ContentNavZoneGit, ContentHeadLine, ContentLine, ContentList, ContentLink} from '../../style/basicComponentsStyle';

const BasicFullWindow = styled('div', {
  margin: 0,
  padding: 0,

  backgroundColor: '#00D6C0'
});


const PageSpec = () => {
    
  return (
    <PageBack className='back'>
      <LeftSpace>
          <LeftWrapper>
              <FlagTitle>
                  🚧 여기는 공사중인 Spec Page에요!<br/>조심하세요!
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
            안녕하세요! 🕺 Hyunja 입니다.
          </ContentHeadLine>
          <ContentList>
            <ContentLine>
              - 💻
              <ContentLink href="https://42seoul.kr/seoul42/main/view">
                42Seoul
              </ContentLink>
              에서 열심히 공부중 입니다.
            </ContentLine>
            <ContentLine>
              - ✏️ 
              <ContentLink href="https://velog.io/@spark">
                블로그
              </ContentLink>
              에 글을 쓰고 있습니다.
            </ContentLine>
            <ContentLine>
              - 💭 혹시 더 궁금하시다면 
              <ContentLink href="https://github.com/Hyunja27">
                여기
              </ContentLink>
            </ContentLine>
            <ContentLine>
              - 🎮 공사기간 동안, 
              <ContentLink href="https://github.com/Hyunja27">
                여기                
              </ContentLink>
              에 깃헙 링크를 드려요
            </ContentLine>
          </ContentList>
        </PageContents>
      </PageSection>
    </PageBack>
  )
}

export default PageSpec;
