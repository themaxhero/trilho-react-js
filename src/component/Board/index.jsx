import React from "react";
import "./index.css";
import * as Ramda from "ramda";
import List from "%component/List";
import Board from "%model/Board";
import { GET_BOARD } from "../../Query";
import { useQuery } from "@apollo/react-hooks";

const LoadingScreen = () => <div>Loading...</div>;
const ErrorOnLoad = (error) => <div />;

function EditNameButton({editingBoardName}){
  return editingBoardName
    ? (<div className="edit-button fa fa-check" onClick={() => {}}/>)
    : (<div className="edit-button fa fa-pencil-square-o" onClick={() => {}}/>);
  }

function BoardName({board, editingBoardName}) {
  return editingBoardName
    ? (<div className="board-name">{Board.getName(board)}</div>)
    : (<input onChange={() => {}} value={"placeholder"} />);
}

function BoardHeader({board, editingBoardName}) {
  return (
    <div className="board-header">
      <BoardName board={board} editingBoardName={editingBoardName} />
      <EditNameButton editingBoardName={editingBoardName} />
    </div>
  )
}

function CardLists({board}){
  return Ramda.map(
    (list) => <List key={list.id} cardList={list} />,
    Board.getCardLists(board)
  );
}

function Component({boardId}) {
  const { loading, error, data } = useQuery(GET_BOARD, { boardId });
  if (loading) return <LoadingScreen />;
  if (error) return <ErrorOnLoad error={error} />;
  const { board } = data;

  return (
    <div className="board">
      <BoardHeader board={board} />
      <div className="board-lists">
        <CardLists board={board}/>
      </div>
    </div>
  );
}

export default Component;