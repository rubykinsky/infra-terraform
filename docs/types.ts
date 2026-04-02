import { ResourceType, ResourceStatus } from './enums';

export interface TerraformResource {
  id: string;
  name: string;
  type: ResourceType;
  status: ResourceStatus;
  createdAt: Date;
  updatedAt?: Date;
}

export interface TerraformPlan {
  resources: TerraformResource[];
  changes: {
    add: number;
    modify: number;
    destroy: number;
  };
}

export interface TerraformApplyResponse {
  success: boolean;
  message?: string;
  appliedResources: TerraformResource[];
}

export interface TerraformState {
  version: number;
  terraformVersion: string;
  serial: number;
  resources: TerraformResource[];
}

export interface TerraformModule {
  name: string;
  source: string;
  version?: string;
  outputs?: Record<string, any>;
}

export interface TerraformConfig {
  requiredProviders: Record<string, string>;
  backend: {
    type: string;
    config: Record<string, any>;
  };
  modules: TerraformModule[];
}