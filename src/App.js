import React from "react";
import AllUseState from "./component/HooksExamples/UseState/AllUseState";
import AllUseEffect from "./component/HooksExamples/UseEffect/AllUseEffect";
import AllUseRef from "./component/HooksExamples/UseRef/AllUseRef";
import AllUserLayoutEffect from "./component/HooksExamples/UseLayoutEffect/AllUserLayoutEffect";
import AllUseCallback from "./component/HooksExamples/UseCallback/AllUseCallback";
import AllUseMemo from "./component/HooksExamples/UseMemo/AllUseMemo";
import AllUseReducer from "./component/HooksExamples/UseReducer/AllUseReducer";
import SimpleUseContext from "./component/HooksExamples/UseContext/SimpleUseContext";
import AdvanceUseContext1 from "./component/HooksExamples/UseContext/AdvanceUseContext1";

export default function App() {
  return (
    <div className='App'>
      {/* <AllUseState /> */}
      {/* <AllUseEffect /> */}
      {/* <AllUseRef /> */}
      {/* <AllUserLayoutEffect /> */}
      {/* <AllUseCallback /> */}
      {/* <AllUseMemo /> */}
      {/* <AllUseReducer /> */}
      {/* <SimpleUseContext /> */}
      <AdvanceUseContext1 />
    </div>
  );
}
