#include <iostream>
#include <vector>
#include <queue>
#include <climits>

using namespace std;

void dijkstra(int nodes, vector<pair<int, int>> adj[], int start) {
    vector<int> dist(nodes, INT_MAX);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;

    dist[start] = 0;
    pq.push({0, start});

    while (!pq.empty()) {
        int current_dist = pq.top().first;
        int current_node = pq.top().second;
        pq.pop();

        for (auto neighbor : adj[current_node]) {
            int next_node = neighbor.first;
            int weight = neighbor.second;

            if (current_dist + weight < dist[next_node]) {
                dist[next_node] = current_dist + weight;
                pq.push({dist[next_node], next_node});
            }
        }
    }

    cout << "Shortest distances from source " << start << ":\n";
    for (int i = 0; i < nodes; ++i) {
        if (dist[i] == INT_MAX) {
            cout << "To node " << i << " : INF\n";
        } else {
            cout << "To node " << i << " : " << dist[i] << endl;
        }
    }
}

int main() {
    int nodes, edges;
    cout << "Enter number of nodes and edges: ";
    cin >> nodes >> edges;

    vector<pair<int, int>> adj[nodes];

    cout << "Enter edges (node1 node2 weight):\n";
    for (int i = 0; i < edges; ++i) {
        int u, v, weight;
        cin >> u >> v >> weight;
        adj[u].push_back({v, weight});
        adj[v].push_back({u, weight});
    }

    int start;
    cout << "Enter the starting node: ";
    cin >> start;

    dijkstra(nodes, adj, start);

    return 0;
}
