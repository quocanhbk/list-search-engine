/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { getFader } from '../../utils/color';
import Progress from './Progress';
import NoSelectionIndicator from './NoSelectionIndicator'
import InfoContainer from './InfoContainer';
import { BsFillStarFill } from 'react-icons/bs';

const DisplayContentWrapper = styled.div`
  flex: 10;
  background-color: ${props => props.theme.color.background.secondary};
  color: ${(props) => props.theme.color.text.primary};
  padding: 0.5rem;
  border-left: 1px solid ${props => props.theme.color.border.primary};
  overflow: overlay;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => getFader(props.theme.color.fill.secondary, 0.5)};
    border-radius: 99px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.color.fill.secondary};
  }
`;

const TaskTitleAnndStatus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  & .title {
    font-size: 1.2rem;
    color: ${props => props.theme.color.fill.primary};
  }
  border-bottom: 1px solid ${props => props.theme.color.border.primary};
`;


const DisplayContent = ({item}) => {
    return (
        <DisplayContentWrapper>
        {!item ? <NoSelectionIndicator/> : 
        <>
            <TaskTitleAnndStatus>
                <p className="title">{item.Title}</p>
                <Progress progress={item.Progress}/>
            </TaskTitleAnndStatus>
            <InfoContainer headline="Primary Information" icon={<BsFillStarFill size="1.2rem"/>}>
                <table>
                    <tbody>
                        <tr>
                            <td>Task Project</td>
                            <td>M04 Lancaster Luminaire</td>
                        </tr>
                        <tr>
                            <td>Task Project</td>
                            <td>M04 Lancaster Luminaire</td>
                        </tr>
                        <tr>
                            <td>Task Project</td>
                            <td>M04 Lancaster Luminaire</td>
                        </tr>
                    </tbody>
                </table>
            </InfoContainer>

        </>
        }
        </DisplayContentWrapper>
    );
}

export default DisplayContent;
