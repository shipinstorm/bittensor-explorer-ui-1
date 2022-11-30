/** @jsxImportSource @emotion/react */
import { Construction } from "@mui/icons-material";
import { css } from "@emotion/react";
import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { config } from "../config";

const StyledTooltip = styled(({className, ...props}: TooltipProps) => <Tooltip {...props} classes={{popper: className}} />)`
	.${tooltipClasses.tooltip} {
		font-size: 14px;
		color: black;
		background-color: #fff200;

		p {
			margin: 0;
			margin-top: 8px;
		}
	}
`;

const iconStyle = css`
	margin-right: 4px;
	font-size: 1.25em;
	border-radius: 2px;
	color: black;
	background-color: #fff200;
	vertical-align: text-bottom;
`;

export const DevtoolsIcon = (props: PropsWithChildren) => {
	if (!config.devtools.enabled) {
		return null;
	}

	return (
		<StyledTooltip
			arrow
			title={
				<>
					<div><strong>Devtools</strong></div>
					<p>Controlled by `devtools` query param (1 - enabled, 0 - disabled)</p>
					<p>Enabled by default on localhost.</p>
				</>
			}
			placement="top"
		>
			<span>
				<Construction css={iconStyle} />
				{props.children}
			</span>
		</StyledTooltip>
	);
};
