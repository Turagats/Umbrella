import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    EditOutlined,
    DeleteOutlined,
    DoubleRightOutlined,
} from "@ant-design/icons";

function App() {
    // const [isEditing, setIsEditing] = useState(false);
    const [isvieWing, setIsViewing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [viwingProduct, setViwingProduct] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 2,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 3,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 4,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 5,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 6,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 7,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 8,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 9,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 10,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
        {
            id: 11,
            name: "Mercedes",
            description: "Mercedes Car",
            price: "15000",
            picture: "",
            category: "Sedan",
        },
    ]);

    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id",
        },
        {
            key: "2",
            title: "Name",
            dataIndex: "name",
        },
        {
            key: "3",
            title: "Description",
            dataIndex: "description",
        },
        {
            key: "4",
            title: "Price",
            dataIndex: "price",
        },
        {
            key: "5",
            title: "Picture",
            dataIndex: "picture",
        },
        {
            key: "6",
            title: "Category",
            dataIndex: "category",
        },
        {
            key: "7",
            title: "Actions",
            render: (record) => {
                return (
                    <div className="flex text-slate-600">
                        {/* <EditOutlined
                            onClick={() => {
                                onEditStudent(record);
                            }}
                        /> */}
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteStudent(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                        <DoubleRightOutlined
                            className="ml-2"
                            // onClick={() => {
                            //     onProductView(record);
                            // }}
                            onClick={() => {
                                onProductView(record);
                            }}
                        />
                    </div>
                );
            },
        },
    ];

    const onProductView = (record) => {
        setIsViewing(true);
        setViwingProduct({ ...record });
    };
    const onCancelProductView = (record) => {
        setIsViewing(false);
        setViwingProduct(null);
    };

    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this student record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter((student) => student.id !== record.id);
                });
            },
        });
    };
    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    };
    return (
        <div className="App p-10 bg-stone-100 h-screen w-full flex flex-col justify-center">
            <header className="App-header bg-white rounded-lg">
                <Link to="/admin" className="w-full flex justify-center m-10">
                    <Button className="">Go to Admin Panel</Button>
                </Link>
                <Table
                    className="mt-10 p-10"
                    columns={columns}
                    dataSource={dataSource}
                    key={"columns.key"}
                ></Table>
                <Modal
                    title="Edit Student"
                    open={isvieWing}
                    okText="Ok"
                    okButtonProps={{
                        style: {
                            // background: "blue",
                            borderColor: "blue",
                            color: "blue",
                        },
                    }}
                    onCancel={() => {
                        onCancelProductView();
                    }}
                    onOk={() => {
                        onCancelProductView();
                    }}
                >
                    <Input className="mb-1" value={viwingProduct?.name} />
                    <Input
                        className="mb-1"
                        value={viwingProduct?.description}
                    />
                    <Input className="mb-1" value={viwingProduct?.price} />
                    <Input className="mb-1" value={viwingProduct?.picture} />
                    <Input className="mb-1" value={viwingProduct?.category} />
                </Modal>
            </header>
        </div>
    );
}

export default App;
