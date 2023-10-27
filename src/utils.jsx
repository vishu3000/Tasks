export const dataCounter = (data) => {
  let dataObject = {
    active: 0,
    toPick: 0,
    done: 0,
    approved: 0,
  };
  data.map((ele) => {
    if (ele.Category === "Active") {
      dataObject.active++;
    } else if (ele.Category === "ToPick") {
      dataObject.toPick++;
    } else if (ele.Category === "Done") {
      dataObject.done++;
    } else {
      dataObject.approved++;
    }
  });
  return dataObject;
};

export const dataArray = (data) => {
  let dataObject = {
    active: [],
    toPick: [],
    done: [],
    approved: [],
  };
  data.map((ele) => {
    if (ele.Category === "Active") {
      dataObject.active.push(ele.Task);
    } else if (ele.Category === "ToPick") {
      dataObject.toPick.push(ele.Task);
    } else if (ele.Category === "Done") {
      dataObject.done.push(ele.Task);
    } else {
      dataObject.approved.push(ele.Task);
    }
  });
  return dataObject;
};
