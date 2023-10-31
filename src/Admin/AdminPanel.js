import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { BASE_URL } from "../config/config";
import { useSelector } from "react-redux";

const dataProvider = jsonServerProvider(BASE_URL);

const AdminPanel = () => {
  const { user } = useSelector((state) => state?.user);
  console.log(user);
  return (
    <Admin dataProvider={dataProvider}>
      {/* <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    /> */}
      {/* Add more resources as needed */}
    </Admin>
  );
};
export default AdminPanel;
