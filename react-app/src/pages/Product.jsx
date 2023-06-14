import React from "react";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";

export default function Product(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const handleOk = () => {
        window.location.href = "/";
    };
    return (
        <div>
            <Modal
                title="Edit Student"
                open={true}
                okText="Ok"
                okButtonProps={{
                    style: {
                        // background: "blue",
                        borderColor: "blue",
                        color: "blue",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                onOk={handleOk}
            >
                <Input className="mb-1" value={props?.name} />
                <Input className="mb-1" value={props?.description} />
                <Input className="mb-1" value={props?.price} />
                <Input className="mb-1" value={props?.picture} />
                <Input className="mb-1" value={props?.category} />
            </Modal>
        </div>
    );
}
