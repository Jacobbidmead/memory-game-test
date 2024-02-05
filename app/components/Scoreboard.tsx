interface Props {
  score: number;
  moves: number;
}

const Scoreboard: React.FC<Props> = ({ score, moves }) => {
  return (
    <>
      {" "}
      <div className="lg:text-2xl xs:text-[14px] pt-5">Matches: {score}</div>
      <div className="lg:text-2xl xs:text-[14px] pt-5 xs:pb-2">
        Moves: {moves}
      </div>
    </>
  );
};

export default Scoreboard;
