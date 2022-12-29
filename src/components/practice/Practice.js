import React from "react";

const InnerComponent = () => {
  return <h1>InnerComponent</h1>;
};

const Practice = () => {
  const firstName = "satya";
  const lastName = "animireddy";

  const user = {
    firstName: "satya",
    lastName: "animireddy",
  };

  const printName = (user) => {
    return `My FullName is ${user.firstName} ${user.lastName}`;
  };
  return (
    <section>
      <>
        <h2>hello {printName(user)} </h2>
        {/* <PrintName /> */}
      </>
    </section>
  );
};

export default Practice;
