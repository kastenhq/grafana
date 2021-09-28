//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This file was autogenerated by cuetsy. DO NOT EDIT!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import * as ui from '@grafana/schema';

export const modelVersion = Object.freeze([0, 0]);

export interface PanelOptions extends ui.OptionsWithLegend, ui.OptionsWithTooltip {
  alignValue: string;
  colWidth?: number;
  rowHeight: number;
  showValue: ui.VisibilityMode;
}

export const defaultPanelOptions: PanelOptions = {
  alignValue: 'left',
};

export interface PanelFieldConfig extends ui.HideableFieldConfig {
  fillOpacity?: number;
  lineWidth?: number;
}

export const defaultPanelFieldConfig: PanelFieldConfig = {
  fillOpacity: 70,
  lineWidth: 1,
};
