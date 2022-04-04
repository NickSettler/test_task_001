import { Dispatch } from "@reduxjs/toolkit";
import { setSelectedPlace } from "../../../modules/weather";
import { PlaceItem } from "../../../helpers/api";
import { connect } from "react-redux";
import { ResultHintLink, ResultHintsBlock } from "./ResultHints.styled";
import { ResultHintsProps } from "./ResultHints.types";
import useResultHints from "./useResultHints";
import { Fade } from "@mui/material";

const ResultHints = (props: ResultHintsProps): JSX.Element => {
  const { items } = props;

  const { handleItemClick } = useResultHints(props);

  return (
    <ResultHintsBlock>
      {items.map((item: PlaceItem) => (
        <Fade key={item.woeid} in={true}>
          <ResultHintLink onClick={() => handleItemClick(item)}>
            {item.title}
          </ResultHintLink>
        </Fade>
      ))}
    </ResultHintsBlock>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedPlace: (place: PlaceItem) => dispatch(setSelectedPlace(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultHints);
