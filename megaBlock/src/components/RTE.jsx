import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({
    name,
    control,
    label,
    defaultValue = "",
}) {
    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-2 text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        value={value}
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste help wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                            content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    );
}

export default RTE;