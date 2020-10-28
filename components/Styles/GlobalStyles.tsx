import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import tw from 'twin.macro';

export const GlobalStyles = createGlobalStyle`
  ${reboot({ black: '0, 0, 0' })}

  body {
    ${tw`bg-gray-800 text-gray-300 font-body relative`}

    h1::selection,
    h2::selection,
    h3::selection,
    h4::selection,
    p::selection,
    a::selection,
    span::selection {
      ${tw`text-gray-100 bg-purple-700 bg-opacity-50`}
    }
  }
  h1 {
    ${tw`mb-3 text-2xl md:text-5xl text-gray-300 font-normal`}
  }
  h2 {
    ${tw`text-h2 text-gray-200 font-semibold`}
  }
  h3 {
    ${tw`text-h3 text-gray-200 font-semibold`}
  }
  h4 {
    ${tw`text-h4 text-gray-200 font-semibold underline`}
  }
  a {
    ${tw`underline`}
  }
  .lazyload {
    -webkit-filter: blur(2px);
    filter: blur(2px);
  }
  .lazyloaded {
    -webkit-filter: blur(0);
    filter: blur(0);
  }
`;
