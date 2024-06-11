import {ReactElement, ReactNode} from 'react';

export type ComponentCategory = 'layout' | 'basic' | 'fields' | 'forms' | 'wizard' | 'tools' | 'blocks'

export type ComponentType = string;

export interface IActionParams {
  [paramIndex: number]: any;
}

export interface IAction {
  action: string;
  params: IActionParams;
  prevActionIndex: string;
}

export interface IActionGroup {
  [actionIndex: number]: IAction;
}

export interface IBusinessRule {
  message: string
  severity: 'error' | 'warning'
  script: string
}

export interface IComponent {
  children: string[];
  type: ComponentType;
  parent: string;
  id: string;
  props: any;
  rootParentType?: ComponentType;
  componentName?: string;
  rules: IBusinessRules;
  actionGroup: IActionGroup;
}

export interface IBusinessRules {
  [name: string]: IBusinessRule;
}

export interface IComponents {
  [name: string]: IComponent;
}

export interface IPages {
  [code: string]: IComponents;
}

export interface IPreviewProps {
  component: IComponent;
}

export interface ComponentItemProps {
  id: string;
  type: ComponentType;
  label: string;
  icon: () => ReactElement;
  isMoved?: boolean;
  isComposite?: boolean;
  isPremium?: boolean;
  rootParentType?: ComponentType;
  children?: ReactNode;
}
