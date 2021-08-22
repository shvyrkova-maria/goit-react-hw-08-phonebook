import styled from '@emotion/styled/macro';
import bgimage from 'images/bg-image.png';

export const НomePageStyled = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgimage});
  background-position: center;
  background-repeat: no-repeat;
`;
