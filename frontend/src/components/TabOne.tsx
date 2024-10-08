import React, { FC, Fragment } from "react";

// const TabOne: FC<{}> = () => {
//   return (
//     <Fragment>
//       <h3>Tab One</h3>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
//         sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
//       </p>
//     </Fragment>
//   );
// };
// export default TabOne;


export const TabOne = React.memo(() => {
    return (<>
     <h3>Tab One</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
      </p>
    </>);
  
  });
  