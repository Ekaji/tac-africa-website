'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var axios = _interopDefault(require('axios'));

var WidgetButton = function WidgetButton(_ref) {
  var myWidgetFunction = _ref.myWidgetFunction,
      style = _ref.style,
      buttonText = _ref.buttonText,
      buttonType = _ref.buttonType;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("button", {
    type: buttonType,
    id: "cloudinary_upload_button",
    style: style || {
      color: 'white',
      border: 'none',
      width: '120px',
      backgroundColor: 'green',
      borderRadius: '4px',
      height: '25px'
    },
    onClick: function onClick() {
      return myWidgetFunction();
    }
  }, buttonText || 'Upload files'));
};

WidgetButton.defaultProps = {
  buttonType: 'button'
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var instance = axios.create();
instance.interceptors.response.use(function (response) {
  return response.data;
});
var getterFunction = function getterFunction(_ref) {
  var url = _ref.url,
      data = _ref.data,
      accepts = _ref.accepts,
      contentType = _ref.contentType,
      withCredentials = _ref.withCredentials;
  instance.defaults.headers.common['Accepts'] = accepts;
  instance.defaults.headers.common['Content-Type'] = contentType;
  instance.defaults.withCredentials = withCredentials;
  var options = {
    url: url + '?nocache=' + new Date().getTime(),
    method: 'post',
    data: data
  };
  return instance(options);
};

var generateSignature = function generateSignature(cb, params, _ref, logging) {
  var generateSignatureUrl = _ref.generateSignatureUrl,
      accepts = _ref.accepts,
      contentType = _ref.contentType,
      withCredentials = _ref.withCredentials,
      customPublicId = _ref.customPublicId,
      eager = _ref.eager,
      apiKey = _ref.apiKey,
      resourceType = _ref.resourceType,
      unique_filename = _ref.unique_filename,
      use_filename = _ref.use_filename;
  params = [].concat(params); //params can be a single object or an array of objects

  logging && console.log(params, 'Params');
  Promise.all(params.map(function (req) {
    var uploadParams = req;
    logging && console.log(req);
    return getterFunction({
      url: generateSignatureUrl,
      data: {
        params_to_sign: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, req.custom_coordinates && {
          custom_coordinates: req.custom_coordinates
        }), eager && {
          eager: eager
        }), req.filename_override && {
          filename_override: req.filename_override
        }), req.headers && {
          headers: req.headers
        }), customPublicId && {
          public_id: customPublicId
        }), req.source && {
          source: req.source
        }), {}, {
          timestamp: req.timestamp,
          unique_filename: req.unique_filename
        }, req.upload_preset && {
          upload_preset: req.upload_preset
        }), {}, {
          use_filename: use_filename
        })
      },
      accepts: accepts,
      contentType: contentType,
      withCredentials: withCredentials
    }).then(function (response) {
      logging && console.log(response, 'Signature Response');
      return Object.assign(_objectSpread2(_objectSpread2(_objectSpread2({}, eager && {
        eager: eager
      }), customPublicId && {
        public_id: customPublicId
      }), {}, {
        signature: response,
        api_key: apiKey,
        resource_type: resourceType
      }), uploadParams);
    });
  })).then(function (results) {
    logging && console.log(results, 'Results');
    cb(results.length === 1 ? results[0] : results);
  });
};

var myWidget = function myWidget(sources, sourceKeys, resourceType, cloudName, uploadPreset, folder, cropping, generateSignatureUrl, onSuccess, onFailure, logging, customPublicId, eager, apiKey, accepts, contentType, withCredentials, use_filename, unique_filename, googleDriveClientId, multiple, widgetStyles, destroy, autoClose) {
  var widget = !!window.cloudinary && window.cloudinary.createUploadWidget(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
    showCompletedButton: true,
    multiple: multiple,
    singleUploadAutoClose: autoClose,
    showAdvancedOptions: true,
    showPoweredBy: false,
    styles: widgetStyles,
    googleDriveClientId: googleDriveClientId,
    sources: sources
  }, sourceKeys && sourceKeys), {}, {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    folder: folder,
    cropping: cropping,
    resourceType: resourceType
  }, generateSignatureUrl && {
    use_filename: use_filename
  }), generateSignatureUrl && {
    eager: eager
  }), generateSignatureUrl && {
    unique_filename: unique_filename
  }), generateSignatureUrl && {
    prepareUploadParams: function () {
      var _prepareUploadParams = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cb, params) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return generateSignature(cb, params, {
                  generateSignatureUrl: generateSignatureUrl,
                  accepts: accepts,
                  contentType: contentType,
                  withCredentials: withCredentials,
                  customPublicId: customPublicId,
                  eager: eager,
                  apiKey: apiKey,
                  resourceType: resourceType,
                  unique_filename: unique_filename,
                  use_filename: use_filename
                }, logging);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function prepareUploadParams(_x, _x2) {
        return _prepareUploadParams.apply(this, arguments);
      }

      return prepareUploadParams;
    }()
  }), function (error, result) {
    if (!error && result && result.event === 'success') {
      logging && console.log('Done! Here is the image info: ', result.info);
      logging && console.log(result);
      !!onSuccess && onSuccess(result);
      destroy && widget.destroy().then(() => {
        document.body.style.removeProperty('overflow');
      });
    } else if (!!error) {
      !!onFailure ? onFailure({
        error: error,
        result: result
      }) : logging && console.log({
        error: error,
        result: result
      });
      destroy && widget.destroy().then(() => {
        document.body.style.removeProperty('overflow');
      });
    } else if (!!resourceType && result.info === 'shown') {
      logging && console.log('setting resourceType'); // document.querySelector(
      //   '.cloudinary_fileupload'
      // ).accept = `${resourceType}/*`
    } else {
      logging && console.log(result);
    }
  });
  widget.open();
};

var UploadWidget = function UploadWidget(_ref) {
  var _ref$sources = _ref.sources,
      sources = _ref$sources === void 0 ? [] : _ref$sources,
      _ref$sourceKeys = _ref.sourceKeys,
      sourceKeys = _ref$sourceKeys === void 0 ? null : _ref$sourceKeys,
      _ref$resourceType = _ref.resourceType,
      resourceType = _ref$resourceType === void 0 ? 'auto' : _ref$resourceType,
      _ref$cloudName = _ref.cloudName,
      cloudName = _ref$cloudName === void 0 ? null : _ref$cloudName,
      _ref$uploadPreset = _ref.uploadPreset,
      uploadPreset = _ref$uploadPreset === void 0 ? null : _ref$uploadPreset,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? null : _ref$buttonText,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? null : _ref$style,
      _ref$widgetStyles = _ref.widgetStyles,
      widgetStyles = _ref$widgetStyles === void 0 ? null : _ref$widgetStyles,
      _ref$folder = _ref.folder,
      folder = _ref$folder === void 0 ? null : _ref$folder,
      _ref$cropping = _ref.cropping,
      cropping = _ref$cropping === void 0 ? true : _ref$cropping,
      generateSignatureUrl = _ref.generateSignatureUrl,
      _ref$onSuccess = _ref.onSuccess,
      onSuccess = _ref$onSuccess === void 0 ? null : _ref$onSuccess,
      _ref$onFailure = _ref.onFailure,
      onFailure = _ref$onFailure === void 0 ? null : _ref$onFailure,
      _ref$logging = _ref.logging,
      logging = _ref$logging === void 0 ? true : _ref$logging,
      _ref$customPublicId = _ref.customPublicId,
      customPublicId = _ref$customPublicId === void 0 ? null : _ref$customPublicId,
      _ref$eager = _ref.eager,
      eager = _ref$eager === void 0 ? null : _ref$eager,
      _ref$apiKey = _ref.apiKey,
      apiKey = _ref$apiKey === void 0 ? null : _ref$apiKey,
      _ref$accepts = _ref.accepts,
      accepts = _ref$accepts === void 0 ? 'application/json' : _ref$accepts,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === void 0 ? 'application/json' : _ref$contentType,
      _ref$withCredentials = _ref.withCredentials,
      withCredentials = _ref$withCredentials === void 0 ? true : _ref$withCredentials,
      _ref$use_filename = _ref.use_filename,
      use_filename = _ref$use_filename === void 0 ? true : _ref$use_filename,
      _ref$unique_filename = _ref.unique_filename,
      unique_filename = _ref$unique_filename === void 0 ? false : _ref$unique_filename,
      _ref$googleDriveClien = _ref.googleDriveClientId,
      googleDriveClientId = _ref$googleDriveClien === void 0 ? null : _ref$googleDriveClien,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$buttonType = _ref.buttonType,
      buttonType = _ref$buttonType === void 0 ? 'button' : _ref$buttonType,
      _ref$destroy = _ref.destroy,
      destroy = _ref$destroy === void 0 ? false : _ref$destroy,
      _ref$autoClose = _ref.autoClose,
      autoClose = _ref$autoClose === void 0 ? true : _ref$autoClose;

  // * put all new variables at the end
  var myWidgetFunction = function myWidgetFunction() {
    return myWidget(sources, sourceKeys, resourceType, cloudName, uploadPreset, folder, cropping, generateSignatureUrl, onSuccess, onFailure, logging, customPublicId, eager, apiKey, accepts, contentType, withCredentials, use_filename, unique_filename, googleDriveClientId, multiple, widgetStyles, destroy, autoClose);
  };

  return /*#__PURE__*/React__default.createElement(WidgetButton, {
    myWidgetFunction: myWidgetFunction,
    buttonText: buttonText,
    buttonType: buttonType,
    style: style
  });
};

var useScript = (function (url) {
  React.useEffect(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, [url]);
});

var WidgetLoader = function WidgetLoader() {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, useScript('https://widget.cloudinary.com/v2.0/global/all.js'));
};
var Widget = function Widget(props) {
  return /*#__PURE__*/React__default.createElement(UploadWidget, props);
};

exports.Widget = Widget;
exports.WidgetLoader = WidgetLoader;
//# sourceMappingURL=index.js.map
