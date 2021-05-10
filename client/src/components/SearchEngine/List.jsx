/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Tag from '../Tag';
import { getFader } from '../../utils/color';
import Context from '../../Context';
import useGetAllTasks from '../../hooks/taskServices/useGetAllTask';
import ListLoader from './ListLoader';
import ListToolbar from './ListToolbar';
import Carousel from './Carousel';

const DisplayListWrapper = styled.div`
  flex: 6;
  background-color: ${(props) => props.theme.color.background.primary};
  color: ${(props) => props.theme.color.text.primary};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  min-width: 320px;
`;

const TagBar = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 2.5rem;
  align-items: center;
`;
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CardList = styled.div`
  width: 100%;
  flex: 1;
  overflow: overlay;
  border-top: 1px solid ${(props) => props.theme.color.border.primary};
  border-bottom: 1px solid ${(props) => props.theme.color.border.primary};
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => getFader(props.theme.color.fill.secondary, 0.5)};
    border-radius: 99px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.color.fill.secondary};
  }
`;

const sampleProject = [
  { label: 'M01', value: 'M01' },
  { label: 'M02', value: 'M02' },
  { label: 'M03', value: 'M03' },
  { label: 'M04', value: 'M04' },
];

const ListFooter = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 0;
  color: ${(props) => props.theme.color.text.secondary};
`;
const DisplayList = ({ selectedId, setSelectedId, handleToggleSideBar, isMobile }) => {
  const { searchContext, filterContext } = Context.useContainer();
  const [project, setProject] = useState('');
  const handleSetProject = (pj) => {
    setProject(pj);
    console.log(pj);
  };
  const { filter } = filterContext;
  let [loading, tasks] = useGetAllTasks(project);
  console.log('Tasks:', tasks, 'Loading: ', loading);

  const shapedData = tasks.map((item) => {
    let newCat = item.Category === null ? [] : item.Category;
    return { ...item, Category: newCat };
  });
  const searchData = () => {
    return shapedData.filter((item) => {
      const itemString =
        item.AssignedTo.Title +
        ' ' +
        item.AssignedTo.EMail +
        ' ' +
        item.Title +
        item.Progress +
        item.Category +
        item.DueDate;
      return itemString
        .toLowerCase()
        .includes(searchContext.search.toLowerCase());
    });
  };
  const processData = () => {
    let filteredData = searchData().filter(
      (item) =>
        (filter.assignee === null ||
          filter.assignee === item.AssignedTo.Title) &&
        (filter.progress === null || filter.progress === item.Progress) &&
        (filter.dueDate === null ||
          new Date(filter.dueDate).getTime() ===
            new Date(item.DueDate).getTime()) &&
        (filter.category.length === 0 ||
          (item.Category.length > 0 &&
            filter.category.every((cate) => item.Category.includes(cate))))
    );

    return filteredData;
  };
  const displayDate = (dateString) => {
    let date = new Date(dateString);
    return (
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    );
  };
  return (
    <DisplayListWrapper>
      <ListToolbar isMobile={isMobile} handleToggleSideBar={handleToggleSideBar} />
      <Carousel
        selectedItem={project}
        onItemClick={handleSetProject}
        list={sampleProject}
      />
      <TagBar>
        <p>Filter: </p>
        <TagContainer>
          {Object.entries(filter)
            .filter(([key, item]) =>
              key === 'category' ? item.length > 0 : item !== null
            )
            .map(([key, value]) => {
              value =
                key === 'dueDate'
                  ? displayDate(value)
                  : key === 'category'
                  ? value.join(', ')
                  : value;
              return (
                <Tag
                  key={key}
                  text={value}
                  onClick={() => filterContext.removeFilter(key)}
                />
              );
            })}
        </TagContainer>
      </TagBar>

      <CardList>
        {loading ? (
          <ListLoader />
        ) : (
          <>
            {processData().map((task) => (
              <Card
                key={task.Id}
                assignee={task.AssignedTo.Title}
                email={task.AssignedTo.EMail}
                headline={task.Title}
                progress={task.Progress}
                category={task.Category}
                dueDate={task.DueDate}
                selected={selectedId === task.Id}
                onClick={() => setSelectedId(task.Id)}
              />
            ))}
          </>
        )}
      </CardList>
      <ListFooter>
        Total <b>{processData().length}</b>{' '}
        {processData().length > 1 ? 'results' : 'result'}
      </ListFooter>
    </DisplayListWrapper>
  );
};

export default DisplayList;
