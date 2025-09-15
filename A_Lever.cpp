#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        int a[10], b[10];
        for (int i = 0; i < n; ++i) cin >> a[i];
        for (int i = 0; i < n; ++i) cin >> b[i];
        int posSum = 0;
        for (int i = 0; i < n; ++i) {
            if (a[i] > b[i]) posSum += (a[i] - b[i]);
        }
        cout << posSum + 1 << "\n";
    }
    return 0;
}
