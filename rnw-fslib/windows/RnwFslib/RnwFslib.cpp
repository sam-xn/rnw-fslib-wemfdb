#include "pch.h"

#include "RnwFslib.h"

namespace winrt::RnwFslib
{

// See https://microsoft.github.io/react-native-windows/docs/native-platform for help writing native modules

void RnwFslib::Initialize(React::ReactContext const &reactContext) noexcept {
  m_context = reactContext;
}

double RnwFslib::multiply(double a, double b) noexcept {
  return a * b;
}

} // namespace winrt::RnwFslib