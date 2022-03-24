////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from '../api';

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

const fetchAllOrders = async () => {
  const ids = allIds;
  let orders = ids.map(async (id) => await fetchOrderById(id));
  return Promise.all(orders);
  // .....
  //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
};

const bucketOrdersByUsers = async () => {
  const orders = await fetchAllOrders();
  let ordersByUsers = {};
  orders.forEach((order) => {
    const { timestamp, id, title, userId } = order;
    const userOrders = ordersByUsers[order.userId] ?? [];
    ordersByUsers[userId] = [...userOrders, [id, timestamp, title]];
  });
  return ordersByUsers;
  //   2. TODO: using the function from section 1 you should now bucket the orders by user.
  // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
};

const getLast2WeeksOrders = async () => {
  const orders = await fetchAllOrders();
  const recentOrders = orders.filter((order) => {
    const towWeeksAgo = +new Date(Date.now() - 12096e5);
    return towWeeksAgo <= order.timestamp;
  });
  return recentOrders;
  //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
};

const bucketOrdersByDate = async () => {
  let ordersByDate = {};
  const recentOrders = await getLast2WeeksOrders();
  recentOrders.forEach((order) => {
    const formatedDate = new Date(order.timestamp).toISOString().slice(0, 10);
    const ordersOfTheDate = ordersByDate[formatedDate] ?? [];
    ordersByDate[formatedDate] = [...ordersOfTheDate, order];
  });
  return ordersByDate;
  //   4. TODO: using the function from section 3 bucket the orders by date.
  // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
};

export const fetchTask2 = () => {
  task2Funcs.forEach((func) => func().then((result) => console.log(result)));
};

const task2Funcs = [
  fetchAllOrders,
  bucketOrdersByUsers,
  getLast2WeeksOrders,
  bucketOrdersByDate,
];
