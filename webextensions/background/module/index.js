import * as Constants from '/common/module/constants.js';
import * as Common from '/common/module/common.js';
import * as XPath from '/common/module/xpath.js';
import * as ApiTabs from '/common/module/api-tabs.js';
import * as Permissions from '/common/module/permissions.js';
import * as ContextualIdentities from '/common/module/contextual-identities.js';
import * as ContextMenu from './context-menu.js';
import * as MetricsData from '/common/module/MetricsData.js';

// Set to the global to make compatibility with other classic sources.
for (let key of Object.keys(Constants)) {
  window[key] = Constants[key];
}
for (let key of Object.keys(Common)) {
  window[key] = Common[key];
}
window.XPath = XPath;
window.ApiTabs = ApiTabs;
window.Permissions = Permissions;
window.ContextualIdentities = ContextualIdentities;
window.ContextMenu = ContextMenu;
window.MetricsData = MetricsData;
