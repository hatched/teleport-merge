import {
  Application,
  AuthSettings,
  Cluster,
  CreateAccessRequestParams,
  CreateGatewayParams,
  Database,
  Gateway,
  GetDatabasesResponse,
  GetKubesResponse,
  GetServersResponse,
  Kube,
  LoginLocalParams,
  LoginPasswordlessParams,
  LoginSsoParams,
  ReviewAccessRequestParams,
  Server,
  ServerSideParams,
  TshAbortController,
  TshAbortSignal,
  TshClient,
} from '../types';
import { AccessRequest } from '../v1/access_request_pb';

export class MockTshClient implements TshClient {
  listRootClusters: () => Promise<Cluster[]>;
  listLeafClusters: (clusterUri: string) => Promise<Cluster[]>;
  listApps: (clusterUri: string) => Promise<Application[]>;
  getAllKubes: (clusterUri: string) => Promise<Kube[]>;
  getKubes: (params: ServerSideParams) => Promise<GetKubesResponse>;
  getAllDatabases: (clusterUri: string) => Promise<Database[]>;
  getDatabases: (params: ServerSideParams) => Promise<GetDatabasesResponse>;
  listDatabaseUsers: (dbUri: string) => Promise<string[]>;
  getAllServers: (clusterUri: string) => Promise<Server[]>;
  getRequestableRoles: (clusterUri: string) => Promise<string[]>;
  getServers: (params: ServerSideParams) => Promise<GetServersResponse>;
  assumeRole: (
    clusterUri: string,
    requestIds: string[],
    dropIds: string[]
  ) => Promise<void>;
  deleteAccessRequest: (clusterUri: string, requestId: string) => Promise<void>;
  getAccessRequests: (clusterUri: string) => Promise<AccessRequest.AsObject[]>;
  getAccessRequest: (
    clusterUri: string,
    requestId: string
  ) => Promise<AccessRequest.AsObject>;
  reviewAccessRequest: (
    clusterUri: string,
    params: ReviewAccessRequestParams
  ) => Promise<AccessRequest.AsObject>;
  createAccessRequest: (
    params: CreateAccessRequestParams
  ) => Promise<AccessRequest.AsObject>;
  listServers: (clusterUri: string) => Promise<Server[]>;
  createAbortController: () => TshAbortController;
  addRootCluster: (addr: string) => Promise<Cluster>;

  listGateways: () => Promise<Gateway[]>;
  createGateway: (params: CreateGatewayParams) => Promise<Gateway>;
  removeGateway: (gatewayUri: string) => Promise<undefined>;
  restartGateway: (gatewayUri: string) => Promise<undefined>;
  setGatewayTargetSubresourceName: (
    gatewayUri: string,
    targetSubresourceName: string
  ) => Promise<Gateway>;
  setGatewayLocalPort: (
    gatewayUri: string,
    localPort: string
  ) => Promise<Gateway>;

  getCluster: (clusterUri: string) => Promise<Cluster>;
  getAuthSettings: (clusterUri: string) => Promise<AuthSettings>;
  removeCluster: (clusterUri: string) => Promise<undefined>;
  loginLocal: (
    params: LoginLocalParams,
    abortSignal?: TshAbortSignal
  ) => Promise<undefined>;
  loginSso: (
    params: LoginSsoParams,
    abortSignal?: TshAbortSignal
  ) => Promise<undefined>;
  loginPasswordless: (
    params: LoginPasswordlessParams,
    abortSignal?: TshAbortSignal
  ) => Promise<undefined>;
  logout: (clusterUri: string) => Promise<undefined>;
  transferFile: () => undefined;
}
