import { useParams } from "react-router-dom";

import { OperationModes } from "src/constants";

function useMode() {
  const mode = useParams()?.mode as OperationModes;

  return mode;
}

export default useMode;
