#pragma once

#include "pch.h"
#include "resource.h"

#if __has_include("codegen/NativeRnwFslibDataTypes.g.h")
  #include "codegen/NativeRnwFslibDataTypes.g.h"
#endif
#include "codegen/NativeRnwFslibSpec.g.h"

#include "NativeModules.h"

namespace winrt::RnwFslib
{

// See https://microsoft.github.io/react-native-windows/docs/native-platform for help writing native modules

REACT_MODULE(RnwFslib)
struct RnwFslib
{
  using ModuleSpec = RnwFslibCodegen::RnwFslibSpec;

  REACT_INIT(Initialize)
  void Initialize(React::ReactContext const &reactContext) noexcept;

  REACT_SYNC_METHOD(multiply)
  double multiply(double a, double b) noexcept;

private:
  React::ReactContext m_context;
};

} // namespace winrt::RnwFslib