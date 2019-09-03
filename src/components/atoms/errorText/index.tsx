import React, { FC } from "react";

import { Error } from "./styles";

const ErrorText: FC = ({ children }) => <Error>{children}</Error>;

export default ErrorText;
