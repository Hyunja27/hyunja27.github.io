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
                  π§ μ¬κΈ°λ κ³΅μ¬μ€μΈ Spec Pageμμ!<br/>μ‘°μ¬νμΈμ!
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
            μλνμΈμ! πΊ Hyunja μλλ€.
          </ContentHeadLine>
          <ContentList>
            <ContentLine>
              - π»
              <ContentLink href="https://42seoul.kr/seoul42/main/view">
                42Seoul
              </ContentLink>
              μμ μ΄μ¬ν κ³΅λΆμ€ μλλ€.
            </ContentLine>
            <ContentLine>
              - βοΈ 
              <ContentLink href="https://velog.io/@spark">
                λΈλ‘κ·Έ
              </ContentLink>
              μ κΈμ μ°κ³  μμ΅λλ€.
            </ContentLine>
            <ContentLine>
              - π­ νΉμ λ κΆκΈνμλ€λ©΄ 
              <ContentLink href="https://github.com/Hyunja27">
                μ¬κΈ°
              </ContentLink>
            </ContentLine>
            <ContentLine>
              - π? κ³΅μ¬κΈ°κ° λμ, 
              <ContentLink href="https://github.com/Hyunja27">
                μ¬κΈ°                
              </ContentLink>
              μ κΉν λ§ν¬λ₯Ό λλ €μ
            </ContentLine>
          </ContentList>
        </PageContents>
      </PageSection>
    </PageBack>
  )
}

export default PageSpec;
