import Element from "./Element"
export default [
    {
        "componentDetails":{
                "element_type":"h1",
                "element_className":"Parent",
                "element_children":[Element(
                    {"componentDetails": {
                        "element_type":"div",
                        "element_className":"ChildDiv1",
                        "element_children":[Element(
                            {"componentDetails": {
                                "element_type":"div",
                                "element_className":"ChildOfDiv1",
                                "element_children":["This is Div2"]
                            }}
                        ),Element(
                            {"componentDetails": {
                                "element_type":"div",
                                "element_className":"childOfDiv1",
                                "element_children":["This is Div 3"]
                            }}
                        )]
                    }}
                ),Element(
                    {"componentDetails": {
                        "element_type":"div",
                        "element_className":"ChildDiv2",
                        "element_children":["This is Div",Element(
                            {"componentDetails": {
                                "element_type":"input",
                                "element_className":"inputClass",
                                "element_children":[]
                            }}
                        )]
                    }}
                ),Element(
                    {"componentDetails": {
                        "element_type":"select",
                        "element_className":"select",
                        "element_label":"Select",
                        "element_value":"2",
                        "element_children":[Element(
                            {"componentDetails": {
                                "element_type":"option",
                                "element_className":"OptionClass",
                                "element_label":"Option 1",
                                "element_value":"1",
                                "element_children":[]
                            }}
                        ),Element(
                            {"componentDetails": {
                                "element_type":"option",
                                "element_className":"OptionClass",
                                "element_value":"2",
                                "element_label":"Option 2",
                                "element_children":[]
                            }}
                        )]
                    }}
                )]
        }
    },
]