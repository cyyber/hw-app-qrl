/********************************************************************************
 *   QRL Browserify Generation
 *   (c) 2019 The QRL Foundation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ********************************************************************************/

import "babel-polyfill";

import TransportU2F from "@ledgerhq/hw-transport-u2f";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import Qrl from "./Qrl";

window.Buffer = require("buffer").Buffer;

const transports = [
  { name: "U2F transport", clazz: TransportU2F },
  { name: "WebUSB transport", clazz: TransportWebUSB },
];

window.TransportWebUSB = TransportWebUSB;

window.Qrl = Qrl;

window.transports = transports;
