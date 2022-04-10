import {styled} from './theme';


export const PageBack = styled('div', {
    padding: '0',
    margin: '0',
    background: '#FFFFFF',
    height: '100vh',
    display: 'flex'
})

export const LeftSpace = styled('div',{
    padding: '0',
    margin: '0',
    background: '#FFFFFF',
    height: '100%',
    width: '50vw',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    '@tabletS':{
        width:'30vw'
    },
    '@mobile':{
        display:'none'
    }
})

export const PageSection = styled('div', {
    background: '#559B69',
    width: '30rem',
    height: '100%',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    '@tabletS':{
        width:'70vw'
    },
    '@mobile':{
        width:'100vw'
    }
})

export const ContentNav = styled('div', {
    margin: '0',
    padding: '0',
    paddingBottom: '2rem',
    display: 'flex',
    color:'#3F725C',
    width: '100%',
    height: '5rem'
})

export const ContentNavZoneHome = styled('div', {
    margin: '0',
    padding: '0',
    background:'#B075D1',
    width: '40%',
    height: '5rem'
})

export const ContentNavZoneSpec = styled('div', {
    margin: '0',
    padding: '0',
    background:'#B488CE',
    width: '30%',
    height: '5rem'
})

export const ContentNavZoneGit = styled('div', {
    margin: '0',
    padding: '0',
    background:'#BEA9CC',
    width: '30%',
    height: '5rem'
})

export const PageContents = styled('div', {
    padding: '0',
    margin: '0',
    fontSize: '30px'
    // justifyContent: 'center'
});

export const ContentHeadLine = styled('h1', {
    padding: '1rem',
    textDecoration: 'underline',
    textDecorationColor: '#66DD21',
    textUnderlineOffset: '4px',
    textAlign: 'center',
    fontSize: '2rem'

    // justifyContent: 'center'
});

export const ContentList = styled('ul', {
    display: 'block',
    fontSize: '1rem',

    // justifyContent: 'center'
});

export const ContentLine = styled('p', {
    paddingLeft: '1rem',
    paddingTop: '10px',
    color:'Black',
    fontSize: '1.3em'

    // justifyContent: 'center'
});

export const ContentLink = styled('a', {
    padding: '4px 8px',
    color:'yellow',
    border: '1px solid #66DD21',
    borderRadius: '9px',
    

    // justifyContent: 'center'
});


export const FlagTitle = styled('span',{
    fontSize: '40px',
    display: 'block',
    width: '30rem',
    margin: 'auto',
    textAlign: 'center',
    '@tabletS':{
        // display: 'none'
        width: '10rem',
        fontSize: '1rem'
    }
})

export const LogoImg = styled('img', {
    width: '30rem',
    display: 'block',
    margin: 'auto',

    '@tabletS':{
        // display: 'none'
        width: '15rem'
    }
})

export const LeftWrapper = styled('div', {
    width: '100%'
})